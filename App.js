import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Pressable, TouchableOpacity, SafeAreaView, Alert, Modal } from 'react-native';

const EggClicker =()=>{
/*
  * Variables
  -pressegg: used to store how many times egg is pressed
  -Clickper: Stores how many clicks per second
  - SetDisabled 0-3: enables and disables the 4 buttons.
  - SetbackColor 0-3: changes the text color of the buttons.
  - setIntervalid: used to stop the clciks per second
  
*/
  const [pressEgg, setPressegg] = useState(0);
  const [clickPer, setClickper ] = useState(0);
  const [disabled,setDisabled]=useState(true);
  const [disabled1,setDisabled1]=useState(true);
  const [disabled2,setDisabled2]=useState(true);
  const [disabled3,setDisabled3]=useState(true);
  const [backColor, setBackcolor] = useState('silver');
  const [backColor1, setBackcolor1] = useState('silver');
  const [backColor2, setBackcolor2] = useState('silver');
  const [backColor3, setBackcolor3] = useState('silver');
  const [intervalId, setIntervalId] = useState(0);
  

  
  
/*
  * pressed
  * Purpose: This function adds 1 to the variable pressEgg anytime the user clicks the egg
  * Parameter(s):
        *Empty.
  * preconditions:
        *pressEgg is defined
  * Side Effect:
        *PressEgg is updated

*/
  const pressed =()=>
  {
    //Add 1 to previous value of pressEgg
   setPressegg(prevpressEgg => prevpressEgg + 1);
  }

/*
  * incrementClicks
  * Purpose: This function updates the value of pressEgg by adding certain values to the previous value every second and updates the clickPer value
  * Parameter(s):
        *Props.
  * preconditions:
        *pressEgg is defined
        *clickPer is defined
  * Side Effect:
        *Based on the prop sent to the fuction,if prop:
        equals 1 - pressEgg is updated by 1 and clickPer is updated by 1
        equals 2 - pressEgg is updated by 10 and clickPer is updated by 10
        equals 3 - pressEgg is updated by 20 and clickPer is updated by 20
        equals 4 - pressEgg is updated by 30 and clickPer is updated by 30
*/

function incrementClicks(props)
{
  if (props == '1')
  {
    //Add 1 to previous value of pressEgg every second
   setIntervalId(setInterval(() => {
    setPressegg(prevpressEgg => prevpressEgg + 1);
  }, 1000));
    //Add 1 to previous value of clickPer
   setClickper(prevclickPer => prevclickPer +1)

  }
  if (props == '2')
  {
    //Add 10 to previous value of pressEgg every second
    this.setInterval(() => {
    setPressegg(prevpressEgg => prevpressEgg + 10);
  }, 1000);
    //Add 10 to previous value of clickPer
    setClickper(prevclickPer => prevclickPer +10)

  }
  if (props == '3')
  {
    //Add 20 to previous value of pressEgg every second
    setInterval(() => {
    setPressegg(prevpressEgg => prevpressEgg + 20);
  }, 1000);
    //Add 20 to previous value of clickPer
    setClickper(prevclickPer => prevclickPer + 20)

  }
  if (props == '4')
  {
    //Add 30 to previous value of pressEgg every second
    setInterval(() => {
    setPressegg(prevpressEgg => prevpressEgg + 30);
  }, 1000);
    //Add 30 to previous value of clickPer
    setClickper(prevclickPer => prevclickPer +30)

  } 
}

/*
  * winner
  * Purpose: This function pops out an alert box informing the user they have won and informs them to reset the game then calls function resetGame 
  * Parameter(s):
        *Props.
  * preconditions:
        *pressEgg has reached a value of 1 quadrillion
  * Side Effect:
        *Calls function resetGame
        
*/
function winner()
{
  

   Alert.alert(
    "Congratulations on wasting your time!!!!!!",
    "You have won",
    [
      {text:"Click to Reset", onPress: ()=>resetGame()}
    ]

  )  
}

/*
  * resetGame
  * Purpose: This function resets the cookie clicker 
  * Parameter(s):
        *Props.
  * preconditions:
        *pressEgg has reached a value of 1 quadrillion
  * Side Effect:
        *pressEgg is reset to 0
        *clickPer is reset to 0
        *setDisabled 0-3 is reset to true
        
*/
function resetGame()
{
  setPressegg(0)
  setClickper(0)
  setDisabled(true)
  setDisabled1(true)
  setDisabled2(true)
  setDisabled3(true)
  
}

/*
  * chceckEgg
  * Purpose: This function changes the text color and disbales or enables the buttons and disables the interval
  * Parameter(s):
        *Empty
  * preconditions:
        *pressEgg has reached a certain value
  * Side Effect:
        *setDisabled is set to either true or false
        *setBackcolor is set to either silver or white
        
        
*/

function checkEgg()
{
   //if pressEgg equals 1Quadrillion call winner function
  if(pressEgg == Math.pow(10,15))
  {
    
    clearInterval(intervalId)
    winner()
    
  }
  //if pressEgg equals 100 enable button1
  if (pressEgg >=Math.pow(10,2))
  {
   
    setDisabled(false)
    setBackcolor('white')
    
  }
  else
  {
    setDisabled(true)
    setBackcolor('silver')
    
  }
  //if pressEgg equals 10000 enable button2
  if (pressEgg >=Math.pow(10,4))
  {
    setDisabled1(false)
    setBackcolor1('white')
  }
  else
  {
    setDisabled1(true)
    setBackcolor1('silver')

  }
  //if pressEgg equals 1Million enable button3
  if (pressEgg >= Math.pow(10,6))
  {
    setDisabled2(false)
    setBackcolor2('white')
  }
  else
  {
    setDisabled2(true)
    setBackcolor2('silver')

  }
  //if pressEgg equals 100Million enable button4
  if (pressEgg >=Math.pow(10,8))
  {
    setDisabled3(false)
    setBackcolor3('white')
    
  }
  else
  {
    setDisabled3(true)
    setBackcolor3('silver')

  }
 
  
}

/*
  * useEffect
  * Purpose: This function checks for any change in the variable pressEgg and callsfunction checkEgg which checks if it meets the criteria to either enable or disable the buttons. Also checks               if it is equals to the target number
  * Parameter(s):
        *Props.
  * preconditions:
        *pressEgg is being updated
  * Side Effect:
        *If pressEgg is equals to 100 setDisabled to false else set it to true
        *If pressEgg is equals to 10K setDisabled to false else set it to true
        *If pressEgg is equals to 1Million setDisabled to false else set it to true
        *If pressEgg is equals to 100Million setDisabled to false else set it to true
        
*/
useEffect(() => {
  checkEgg();
  
  
 
    console.log({
      pressEgg,
      disabled,
      disabled1,
      disabled2,
      disabled3,
      clickPer,
     backColor,
     intervalId,
   
     
      
      
    });
  }, [
      pressEgg,
      disabled,
      disabled1,
      disabled2,
      disabled3 ,
      clickPer,
      backColor,
      intervalId,
      
      ]);

return(
  <SafeAreaView style = {styles.container}>
        {/* View for number of clicks */}
      <View style = {styles.clicksView}>
        <Text style  = {[  {fontSize:30, fontWeight: 'bold'}]} >{pressEgg} clicks</Text>
      </View>
        {/* View for egg and clicks per second */}
      <View style = {styles.eggButton}>
            {/* When clciked add 1 to pressEgg */}
          <TouchableOpacity onPress = {pressed} >
              <Text style  = {[{fontSize:120, fontWeight: 'bold', textAlign: 'center'}]}>🥚</Text>
          </TouchableOpacity>
            <Text style = {[{textAlign: 'center', padding: 10, fontWeight: 'bold', fontSize:30}]}> + {clickPer} clicks/sec</Text>
            <Text style = {[{textAlign: 'center', fontWeight: 'bold', fontSize:20}]}>Click Boosts:</Text>
            <Text style = {[{textAlign: 'center'}]}>click boosts are non-refundable (M indicates millions):</Text>
       
       </View>


      {/* View for buttons */}
      <View style={styles.autoClicker}>
        {/* When button is clicked, subtract 100 from pressEgg and call function incrementClicks*/}
       <TouchableOpacity  disabled={disabled} onPress={()=>{setPressegg(pressEgg - Math.pow(10,2)); incrementClicks('1');}}>
       <Text style={[styles.autoButtons, {color: backColor}]}>     +1 Click/s [ Cost :100 clicks ]</Text>
       </TouchableOpacity>
         {/* When button is clicked, subtract 10000 from pressEgg and call function incrementClicks*/}
       <TouchableOpacity  disabled={disabled1} onPress={()=>{setPressegg(pressEgg - Math.pow(10,4)); incrementClicks('2')}}>
       <Text style={[styles.autoButtons, {color: backColor1}]}>   +10 Click/s [ Cost :10k clicks ]</Text>
       </TouchableOpacity>
         {/* When button is clicked, subtract 1 Million from pressEgg and call function incrementClicks*/}
      <TouchableOpacity  disabled={disabled2} onPress={()=>{setPressegg(pressEgg - Math.pow(10,6)); incrementClicks('3')}}>
      <Text style={[styles.autoButtons, {color: backColor2}]}>    +20 Click/s [ Cost :1M clicks ]</Text>
      </TouchableOpacity>
           {/* When button is clicked, subtract 100 Million from pressEgg and call function incrementClicks*/}
      <TouchableOpacity  disabled={disabled3} onPress={()=>{setPressegg(pressEgg - Math.pow(10,8)); incrementClicks('4')}}>
      <Text style={[styles.autoButtons, {color: backColor3}]}>+30 Click/s [ Cost :100M clicks ]</Text>
      </TouchableOpacity>
      
      
      </View>




  </SafeAreaView>
  
)

};
export default EggClicker;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    
  },
  clicksView: {
    flex:1,
    //backgroundColor: "red",
    alignItems: "flex-end",
    padding: 4,
    

  },
  eggButton: {
    flex : 2,
    //backgroundColor: "blue",
    alignContent: "center",
    alignItems: "center",
    padding: 30
  },
  autoClicker:{
    flex:3,
   // backgroundColor: "yellow",
    alignItems: "center",
   justifyContent: 'space-evenly',


  },
  autoButtons:{
    padding: 30,
   backgroundColor: "grey",
   
  

  }



})


