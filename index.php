<!DOCTYPE html>
<html>

<head>
    <title>تحديثات البرامج</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" />
</head>

<body class="p-3 mb-2 bg-warning text-dark">
		<div class="container">
		  <div class="row d-flex justify-content-center">
				<div class ="col>
				</div>
				<div class="col">
						<h4>
							xyber.feedback@gmail.com
							<small class="text-muted"> للتواصل معنا يرجى استعمال البريد الالكتروني</small>
				  
						</h4>
				</div>
			</div>
			<div class="row d-flex justify-content-center">
			<div class ="col>
			</div>
			<?php
			if(file_exists("updates/update.db")){
			echo '<div class="col">
						<h4>
							<a href="updates/update.db"><img src="download.gif" style="width:42px;height:42px;"/></a>
							<small class="text-muted"> يمكنكم تحميل المراحل الاربع المتبقية من تطبيق خمسة في خمسة من هنا</small>
				  
						</h4>
				</div>
			</div>';
			}
			else{
				echo '<div class="col">
						<h4>
							<small class="text-muted">نعتذر لا توجد اي تحديثات لحد الان,شكرا على تفهمكم</small>
				  
						</h4>
				</div>
			</div>';
			}
			?>
		</div>

</body


</html>
