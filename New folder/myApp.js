import React , {useState} from 'react';
import {Text, View,ScrollView, Image,Button, TextInput} from 'react-native';

const App = () => {
  const [isEnter, setIsEnter] = useState(true);
    const [text, setText] = useState('');


  return (
  
    <View 
      style={{ backgroundColor: 'white',
        flex:2,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
     <Image
          source={require('./images/ww.png')}
          style={{width: 100, height: 100}}
        />
      <Text  style={{ color: 'black' ,   fontSize: 35 ,fontfamily:''}}>Hello
       </Text>
      <Text style={{ color: 'black' ,   fontSize: 20}}>
        my name is wesal mazen</Text>
        <TextInput
        style={{
          height: 40, width :300,
          borderColor: 'gray',
          borderWidth: 6,
        }}
 placeholder="    insert your name"
          onChangeText={newText => setText(newText)}
        defaultValue={text}
      />
      <Text style={{padding: 40, fontSize: 20}}>
        {text
          .split(' ')
          .map(word => word && ' your name!!')
          .join(' ')}
      </Text>
      
      <Button style={{
        justifyContent: 'center',
        alignItems: 'center'
        }}
 onPress={() => {
          setIsEnter(false);
        }}
        disabled={!isEnter}
        title={isEnter ? 'I insert my name ' : 'Welcome!'}
  
  color="blue"
  
/>

    </View>
    
  );
};

export default App;

