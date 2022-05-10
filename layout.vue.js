const MyLayout = {
    template: `
        <q-header reveal elevated class="bg-primary text-white">
          <q-toolbar>
            <q-toolbar-title>
              JARA
            </q-toolbar-title>
          <q-btn-dropdown stretch flat :label="layoutLabel.userName + layoutLabel.userNameSuffix">
                <q-list>
                  <q-item-label header>{{$props.layoutLabel.myInfo}}</q-item-label>
                  <q-item clickable v-close-popup  @click="showUserEditForm()">
                    <q-item-section avatar>
                      <q-avatar icon="edit" color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{$props.layoutLabel.userEdit}}</q-item-label> 
                    </q-item-section>
                  </q-item>
                  <q-item clickable v-close-popup>
                    <q-item-section avatar>
                      <q-avatar icon="logout" color="primary" text-color="white" />
                    </q-item-section>
                    <q-item-section>
                      <q-item-label>{{$props.layoutLabel.logout}}</q-item-label> 
                    </q-item-section>
                  </q-item>
                </q-list>
             </q-btn-dropdown>
              
          </q-toolbar>
          
            <q-tabs align="center" class="bg-white text-primary">
                <q-tab :label="layoutLabel.todo" icon="task"/>
                <q-tab :label="layoutLabel.inProgress" icon="schedule"/>
                <q-tab :label="layoutLabel.resolved" icon="check_circle"/>
            </q-tabs>
        </q-header>
        <-- end top header toolbar -->
        
        <-- begin left navigation -->
         <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
          <q-scroll-area class="fit">
          <q-list padding class="menu-list">
            <q-item clickable v-ripple @click="showWriteForm()">
              <q-item-section avatar>
                <q-icon name="add_task" />
              </q-item-section>

              <q-item-section >
                <a  >{{$props.layoutLabel.publishIssue}}</a>
              </q-item-section>
            </q-item>
         
          </q-list>
        </q-scroll-area>
        </q-drawer>
        <-- end left navigation -->
               
        <!-- begin issue-list -->               
        <issue-list
            :issues="issues"
            :type-label="typeLabel"
            @issueCardClicked="clickIssue"
        /> 
        <!-- end issue-list -->
        
        <!-- begin issue-write-form -->
        <issue-write-form 
            v-model="issueWriteFormShowed"
            :user="user"
            :type-label="typeLabel"
        />
        <!-- end issue-write-form -->
        
        <!-- begin issue-edit-form -->
        <issue-edit-form 
            v-model="issueFormShowed"
            :user="user"
            :issue="clickedIssue"
           :type-label="typeLabel"
            />
        <!-- end issue-edit-form -->
        
        <!-- begin issue-edit-form -->
        <user-edit-form 
            v-model="userEditFormShowed"
            :user="user"
           :type-label="typeLabel"
            />
        <!-- end issue-edit-form -->
`,
    props: [
        'layoutLabel',
        'user',
        'issues',
        'typeLabel'
    ],
    data() {
        return {
            issueWriteFormShowed: false,
            issueFormShowed: false,
            userEditFormShowed: false,
            clickedIssue: 0,
        }
    },
    methods: {
        showWriteForm() {
            this.issueWriteFormShowed = true

        },
        showUserEditForm() {
            this.userEditFormShowed = true
            console.log(11)
        },
        clickIssue(id) {
            this.issueFormShowed = true
            this.clickedIssue = this.$props.issues.find(issue => {
                return issue.id === id
            })
        },
        hello() {
            axios.get('/hello')
                .then(response => {
                    console.log('hello!')
                })
                .catch(error => {
                    console.log('catch!')
                })

        }
    }
}
