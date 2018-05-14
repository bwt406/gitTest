$().ready(function(){
	$('#reset').click(function(){
		$("form").each(function() {  
			$('#wNameDiv').empty();
			$('#wIdDiv').empty();
			$('#wPwdDiv').empty();
			$('#wRePwdDiv').empty();
            this.reset();  
        });  
	});
	
	$('#wName').keyup(function(){
		if($('#wName').val().length==0)
			$('#wNameDiv').text('이름 입력').css('color','red').css('font-size','9pt');
		else
			$('#wNameDiv').text('');
	});
	
	$('#wId').keyup(function(){
		if($('#wId').val().length==0)
			$('#wIdDiv').text('아이디 입력').css('color','red').css('font-size','9pt');
		else
			$('#wIdDiv').text('');
	});
	
	$('#wPwd').keyup(function(){
		if($('#wPwd').val().length==0)
			$('#wPwdDiv').text('비밀번호 입력').css('color','red').css('font-size','9pt');
		else
			$('#wPwdDiv').text('');
	});
	
	$('#wRePwd').keyup(function(){
		if($('#wRePwd').val().length==0)
			$('#wRePwdDiv').text('재확인 입력').css('color','red').css('font-size','9pt');
		else
			$('#wRePwdDiv').text('');
	});
	
	$('#wRePwd').keyup(function(){
		if($('#wPwd').val()==$('#wRePwd').val()){
			$('#wRePwdDiv').html("비밀번호 일치").css('color','blue');
		}else{
			$('#wRePwdDiv').html("비밀번호 불일치").css('color','red');
		}
	});

	$('#checkModify').click(function(){
		$('#wNameDiv').empty();
		$('#wPwdDiv').empty();
		$('#wRePwdDiv').empty();
		
		if($('#wName').val()==""){
			$('#wNameDiv').html("이름을 입력하세요").css('color','red');
			$('#wName').focus();
		}else if($('#wPwd').val()==""){
			$('#wPwdDiv').html("비밀번호를 입력하세요").css('color','red');
			$('#wPwd').focus();
		}else if($('#wRePwd').val()==""){
			$('#wRePwdDiv').html("재확인을 입력하세요").css('color','red');
			$('#wRePwd').focus();
		}else if($('#wPwd').val()!=$('#wRePwd').val()){
			$('#wPwdDiv').html("비밀번호가 맞지않습니다").css('color','red');
			$('#wPwd').focus();
		}else{
			$('#modifyForm').submit();	
		}
	});
	
	$('#checkWrite').click(function(){
		$('#wNameDiv').empty();
		$('#wIdDiv').empty();
		$('#wPwdDiv').empty();
		$('#wRePwdDiv').empty();
		
		if($('#wName').val()==""){
			$('#wNameDiv').html("이름을 입력하세요").css('color','red');
			$('#wName').focus();
		}else if($('#wId').val()==""){
			$('#wIdDiv').html("아이디를 입력하세요").css('color','red');
			$('#wId').focus();
		}else if($('#wPwd').val()==""){
			$('#wPwdDiv').html("비밀번호를 입력하세요").css('color','red');
			$('#wPwd').focus();
		}else if($('#wRePwd').val()==""){
			$('#wRePwdDiv').html("재확인을 입력하세요").css('color','red');
			$('#wRePwd').focus();
		}else if($('#wPwd').val()!=$('#wRePwd').val()){
			$('#wPwdDiv').html("비밀번호가 맞지않습니다").css('color','red');
			$('#wPwd').focus();
		}else if($('#wId').val()!=$('#wCheck').val()){
			$('#wIdDiv').html("중복체크를 하세요").css('color','red');
		}else{
			$('#writeForm').submit();	
		}
	});
	
	$('#email3').change(function(){
		$('#email3 option:selected').each(function(){
			$('#email2').val($('#email3').val());
		});
	});

	$('#checkId').click(function(){
		if($('#wId').val()=="")
			$('#wIdDiv').html("먼저 아이디를 입력하세요").css('color','red').css('font-size','9pt');
		else{
			$.ajax({
				type : 'POST',
				url : '/springProject/member/checkId.do',
				data : 'id='+$('#wId').val(),
				dataType : 'text',
				success : function(data){
					if(data=="not_exist"){
						$('#wIdDiv').html("사용 가능").css('color','blue').css('font-size','9pt');
						$('#wCheck').val($('#wId').val());
					}else if(data=="exist"){
						$('#wIdDiv').html("이미 사용중인 아이디").css('color','red').css('font-size','9pt');
					}
				}
			});
		}
	});

	$('#checkPost').click(function(){
		window.open("/springProject/member/checkPost.do","","width=900 height=600 scrollbars=yes");
	});

});
