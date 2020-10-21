<?php

/******************[ my First PHP Code 20-10-2020]********************/

//===== Task [1] ======//
/** Print allowing msg if age > 18 and forbidden msg if age < 18 **/

$age = 10;

if ($age >= 18) {
	echo "<p>You are welcome</p>";
}elseif($age < 18) {
	echo "<p>Sorry, you are not allowed to enter</p>";
}

echo "<hr/>";

//===== Task [2] ======//
/* Print yes if you find Avatar movie */

$films=array("Fast","Predestination","avatar","Pursuit","Prestige","avatar");

foreach ($films as $film) {
	if ($film == "avatar") {
		echo "yes<br/>";
		break;
	}
}

echo "<hr/>";

/* ===== Task [3] ====== */
/* Print the biggest number  */

$tests=array(5,4,9,3,1,7,5,8,6);
$maxNumber = 0 ;

foreach ($tests as $key => $value) {
	if ($value > $maxNumber) {
		$maxNumber = $value;
	}
}
echo $maxNumber;



echo "<hr/>";

/* ===== Task [4] ====== */
/* print Avatar movie count */

$moviez=array("avatar","Prestige","avatar","Prestige","Avengers");
$filmCount = 0;

foreach ($moviez as $movie) {
	if ($movie == "avatar") {
		$filmCount++;
	}
}

/** another way using for loop**/

// for ($i=0; $i < count($moviez) ; $i++) { 
// 	if ($moviez[$i] == "avatar") {
// 		$filmCount++;
// 	}
// }

echo $filmCount;

echo "<hr/>";

/* ===== Task [5] ====== */
/* Print yes if you find a true and no if you find a false */

$booleansTypes= array(1,"tariq",1.5,true,7,'s',false);

// foreach ($booleansTypes as $value) {
// 	if ( gettype($value) == "boolean" ) {
// 		if ($value == true) {
// 			echo "Yes </br>";
// 		}else{
// 			echo "No </br>";
// 		}
// 	}
// 	echo $value. '<br />';
// }

$x = 0 ;
while ($x < count($booleansTypes)) {
		if ( gettype($booleansTypes[$x]) == "boolean" ) {
		if ($booleansTypes[$x] == true) {
			echo "Yes ";
		}else{
			echo "No ";
		}
	}
	echo $booleansTypes[$x]. ' ';
	$x++;
}

echo "<hr/>";

/* ===== Task [6] ====== */
/* Sort the numbers */

$sortNumbers = array(6,4,9,3,12,8,7);

for($j = 0; $j < count($sortNumbers); $j ++) {
	for($i = 0; $i < count($sortNumbers)-1 ; $i ++){
		 if($sortNumbers[$i] > $sortNumbers[$i+1]) {
			  $temp = $sortNumbers[$i+1];
			  $sortNumbers[$i+1]=$sortNumbers[$i];
			  $sortNumbers[$i]=$temp;
		 }       
	}
}

foreach ($sortNumbers as $value) {
	echo $value.' ';
}

echo "<hr/>";

/* ===== Task [7] ====== */
/* print the eelement if it exists in the other array */


$arr1=array('a','b','c','d');
$arr2=array('c','d','e','f');

foreach ($arr1 as $key => $v1) {
	foreach ($arr2 as $key => $v2) {
		if ($v1 == $v2) {
			echo $v1.' ';
		}
	}
}





?>

