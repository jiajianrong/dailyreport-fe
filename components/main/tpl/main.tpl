<link rel="stylesheet" href="../main.scss?__inline" />
<link rel="stylesheet" href="../check.scss?__inline" />
<link rel="stylesheet" href="../weekly.scss?__inline" />

<section class="contain" transition="contain">
    
	
	<section class="add">
		<div class="adding-title">
		    <h3 href="javascript:;" v-on:click="quit()">退出</h3>
		    <h3 v-on:click="add()">{{isFold}}</h3>
		</div>
		<section id="weekly" v-show='addingItem' keep-alive>
            <div class="fix-h1">
                <div class="textarea1">
                    <textarea class="comment-content" placeholder="请输入任务内容..." v-model="content"></textarea>
                </div>
            </div>
            <a href="javascript:;" class="btn-submit" v-on:click="submit()">提交</a>
        </section>
	</section>
	
	
	
	<section class="list">
        <section id="check">
            <div class="history-list">
                <div class="item" v-for="list in lists">
                    
                    <p class="history-title">
                        <i class="icon"></i>
                        <span class="item-time">{{ list.date }}</span>
                        <span>{{ list.content }}</span>
                    </p>
                </div>
            </div>
        </section>
    </section>
    
	
</section>