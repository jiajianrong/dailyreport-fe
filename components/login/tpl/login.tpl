<link rel="stylesheet" href="../login.scss?__inline" />


<section transition="login">
	<div class="hd">
		<h1 class="logo">登录</h1>
	</div>
	
	<div class="bd">
		<form id="loginForm">
			<div class="row">
				<input type="text" v-model="userID" placeholder="请输入工号" v-on:input="checkUserID">
				<span class="warmInfo" v-if="idNotValid" transition="warm">请输入正确的工号</span>
			</div>
			<div class="row">
				<a href="javascript:;" class="btn-submit" v-on:click="submitForm">登录</a>
			</div>
		</form>
	</div>
	
	<tip-component v-if='idNotExist' :open-tip.sync='idNotExist' keep-alive></tip-component> 
</section>