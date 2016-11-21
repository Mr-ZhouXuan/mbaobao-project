<?php
	if($_POST['kw']=="双肩包"){
		$arr = array('[DUDU]精致自然系列手提双肩包','[戈尔本]男韩版时尚商务尼龙双肩包',
		'[希夏邦马]港风系列潮酷铆钉手提双肩包','[希夏邦马]Play系列花鸟图案太空棉手提双肩包',
		'[DUDU]佩鲁贾系列几何拼接双肩包','[VANWALK]户外行走系列旅行包双肩包','[idand]CITY 28L 超轻城市旅行双肩包')
	}else{
		$arr = array('没有相关结果')
	}
	
	echo json_encode($arr);
?>