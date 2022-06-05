const UserEditForm = {
    template: `
  <q-dialog>

      <q-card style="width: 700px; max-width: 80vw;">
        <q-form @sumit="onSubmit" action="http://localhost:8080/users/1" method="post" enctype="multipart/form-data">
            <q-card-section>
                <div>
                    <span class="text-h6">이름</span>
                    <div>
                      <q-input name="username" v-model="user.username" filled type="text" />
                    </div>
                </div>
            </q-card-section>
            
             <q-card-section>
                <div>
                    <span class="text-h6">프로필 이미지</span>
                    
                      <q-file
                        name="avatarUrl"
                        v-model="file"
                        label="Pick files"
                        filled
                        style="max-width: 300px"
                        accept="image/*"
                        >
                            <template v-slot:prepend>
                             <q-avatar >
                                <img :src="user.avatarUrl">
                                </q-avatar>
                            </template>
                        </q-file>
                </div>
            </q-card-section>
           
            <q-card-actions align="right" class="bg-white text-teal">
              <q-btn flat label="저장" type="submit"  />
              <q-btn flat label="취소" />
            </q-card-actions>
            
                  
          </q-form>
      </q-card>

    </q-dialog>
`,
    props: [
        'user',
        'typeLabel'
    ],
    data() {
        return {
            file: null,
            url : 'http://localhost:8080/users/' + this.$props.user.id,

        }
    },

    methods: {
        onSubmit(event) {
        },
    }
}
