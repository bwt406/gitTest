<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
<script type="text/javascript" src="http://code.jquery.com/jquery-3.3.1.min.js"></script>
<script type="text/javascript">
$().ready(function(){
	$('#subject').keyup(function(){
		if($(this).val().length==0){
			$('#subjectDiv').text("제목 입력").css('color','red').css('font-size','9pt');
		}else
			$('#subjectDiv').text("");
	});
	$('#content').keyup(function(){
		if($(this).val().length==0){
			$('#contentDiv').text("내용 입력").css('color','red').css('font-size','9pt');
		}else
			$('#contentDiv').text("");
	});
	
	$('#checkBoardReply').click(function(){
		if($('#subject').val().length==0){
			$('#subjectDiv').text("제목 입력").css('color','red').css('font-size','9pt');
		}else if($('#content').val().length==0){
			$('#contentDiv').text("내용 입력").css('color','red').css('font-size','9pt');
		}else
			$('#boardReplyForm').submit();
		
	});
});

</script>

<h3>답글쓰기</h3>
<form id="boardReplyForm" name="boardReplyForm" method="post" action="/springProject/board/boardReply.do">
<input type="hidden" name="pseq" value="${pseq }">
<input type="hidden" name="pg" value="${pg }">

<table border="1" cellpadding="3" cellspacing="0">
	<tr>
		<td align="center">제목</td>
		<td>
			<input type="text" id="subject" name="subject" size="50"	placeholder="제목 입력">
		<br><div id="subjectDiv"></div></td>
	</tr>
	<tr>
		<td align="center">내용</td>
		<td><textarea id="content"  name="content" cols="50" rows="15" placeholder="내용 입력"></textarea>
		<br><div id="contentDiv"></div></td>
	</tr>
	<tr>
		<td align="center" colspan="2">
			<input type="button" value="답글쓰기" id="checkBoardReply">
			<input type="reset" value="다시작성">
		</td>
	</tr>
</table>
</form>





