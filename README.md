# HIR - The jQuery plug-in for highlighting text.
'HIR'은 하이라이터의 약어이며, 단순하고 사용하기 쉬운 제이쿼리용 텍스트 강조 플러그-인입니다.

**<사용법>**

**STEP 1**. 설치 
````html
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.hir.js"></script>
````

**STEP 2**. 'hir' 클래스의 스타일을 선언
````css
.hir {
    // Your style here...
}
````

**STEP 3**. 특정 구문의 텍스트 강조 적용
````javascript
$(선택자).hir("구문");
````

**STEP 4**. 텍스트 강조 해제
````javascript
$(선택자).hir();
````
