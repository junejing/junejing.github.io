window.onload=function(){
	var oUl=document.getElementById("list");
	var aH3=oUl.getElementsByTagName("h3");
	var aUl=oUl.getElementsByTagName("ul");
	var arrLi=[];    /*��li*/

    /*���õ��ulʱ��չ�����������ʽ*/
    var tmp = -1;
    var open = false;
    for(var i=0; i < aH3.length; i++){
        aH3[i].index = i;
        aH3[i].onclick = function(){
            for(var i=0; i<aH3.length; i++){
                aUl[i].style.display = 'none';
                aH3[i].className="";
            }
            if(tmp == this.index && open){
                aUl[this.index].style.display = 'none';
                this.className="";
                open = false;
            } else {
                aUl[this.index].style.display = 'block';
                this.className="active";
                open = true;
            }
            tmp = this.index;
        }
    }

/*����li����ʽ*/
    for(var i=0;i<aUl.length;i++){
    	aLi=aUl[i].getElementsByTagName("li");
    	for(var j=0;j<aLi.length;j++){
    		arrLi.push(aLi[j]);
    	}                             
    }                               /*��li*/

    for (var i = 0; i<arrLi.length;i++) {
    	arrLi[i].onclick=function(){

    		for(var i=0;i<arrLi.length;i++){
                arrLi[i].className='';
    		}
            
            this.className="hover";
    	}
    };
 
}
