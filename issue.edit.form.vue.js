const IssueEditForm = {
    template: `
  <q-dialog>
      <q-card style="width: 700px; max-width: 80vw;">
        <q-card-section>
          <div class="text-h5">{{issue.summary}}</div>
        </q-card-section>

        <q-card-section>
            <div>
                <span class="text-h6">리포터</span>
                <div>
                    {{issue.reporter}}
                </div>
            </div>
        </q-card-section>
        
         <q-card-section>
            <div>
                <span class="text-h6">우선순위</span>
                <div>{{typeLabel.priority[issue.priority]}}</div>
            </div>
        </q-card-section>
        
         <q-card-section>
            <div>
                <span class="text-h6">접수일시</span>
                <div>{{issue.createdAt}}</div>
            </div>
        </q-card-section>
        
         <q-card-section>
            <div v-if="issue.createdAt !== issue.updatedAt">
                <span class="text-h6">수정일시</span>
                <div>{{issue.updatedAt}}</div>
            </div>
        </q-card-section>

        <q-card-section>
          <div >
              <span class="text-h6">내용</span>
                <q-input 
                    v-model="issue.description"
                    filled
                    autogrow
                />
           </div>
        </q-card-section>

        <q-card-section>
          <div >
              <span class="text-h6">댓글</span>
                <q-input filled 
                    @keyup.enter="createComment" 
                    v-model="newComment"    
                    label="댓글을 입력하세요" 
                :dense="dense" />
           </div>
           
    
        </q-card-section>

        <q-card-section>
            <q-list bordered separator>
                <q-item
                    v-for="comment in issue.comments" 
                    >
                    <q-item-section avatar style="width:100%">
                        <q-chip>
                            <q-avatar size="24px">
                                <img :src="comment.avatarUrl">
                            </q-avatar>
                            {{comment.username}}
                        </q-chip>
                        
                        <q-input 
                            style="width:100%"
                            filled v-model="comment.body" :dense="dense" 
                            :readonly="editCommentId !== comment.id"
                        />
                        
                        <div>
                            <span @click="editComment(comment.id)">수정</span> | 
                            <span @click="deleteComment(comment.id)">삭제</span>
                        </div>
                                    
                    </q-item-section>
          
                </q-item>
          </q-list>
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="저장" v-close-popup />
          <q-btn flat label="취소" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
`,
    props: [
        'user',
        'issue',
        'typeLabel'
    ],
    data() {
        return {
            editCommentId: 0,
            newComment : '',
        }
    },

    methods: {
        editComment(id) {
            this.editCommentId = id
        },
        deleteComment(id) {
            if (!confirm('삭제하시겠습니까?')) {
                return
            }
        },
        createComment() {
            console.log(this.newComment)
        }
    }
}
