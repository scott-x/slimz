function getTimeString(type){
	var date = new Date(),year,mon,day,hours,minutes,seconds;
  year=date.getFullYear();
  //getMonth() return 0-11，but actual month are 12, so should plus 1 here
  mon = date.getMonth()+ 1;   
  //getdate() return 1-31，no need plus 1  
	day = date.getDate(); 
	hours = date.getHours(); 
  minutes=date.getMinutes(); 
  seconds=date.getSeconds();
  // if less than 9 ,should include '0' before it
  mon=mon<=9?('0'+mon):mon  
	day=day<=9?("0" + day):day;  
	hours=hours<=9?('0'+hours):hours;                   
	minutes=minutes<=9?('0'+minutes):minutes;
  seconds=seconds<=9?('0'+seconds):seconds;
    
  switch(type){
      // Year Month Day
     case 'yyyy-mm-dd':
       return year+'-'+mon+'-'+day;
     case 'yyyy/mm/dd':
       return year+'/'+mon+'/'+day;  
     case 'yyyymmdd':
       return year+mon+day;
     case 'yyyy年mm月dd日':
       return year+'年'+mon+'月'+day+'日'; 
     // Year Month
     case 'yyyy-mm':
       return year+'-'+mon; 
     case 'yyyy/mm':
       return yyyy+'/'+mon;  
     case 'yyyy年mm月': 
       return year+'年'+mon+'月'; 
     // Month Day
     case 'mmdd':
       return mon+day;
     case 'mm/dd':
       return mon+'/'+day;
     case 'mm月dd日':
       return mon+'月'+day+'日'; 
     //Hours Minutes Seconds
     case 'hh:mm:ss':
       return  hours+":"+minutes+":"+seconds;
     case "hh时mm分ss秒":
       return hours+"时"+minutes+"分"+seconds+"秒";
     default:
       return year+'年'+mon+'月'+day+'日'+' '+hours+":"+minutes+":"+seconds;     
  }
}

module.exports=getTimeString;