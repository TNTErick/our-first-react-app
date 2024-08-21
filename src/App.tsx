import * as React from 'react';
import './App.css'

const val字母 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'] as const;
type 字母 = typeof val字母[number]; 
function is字母 (str: string): str is 字母 {return val字母.includes(str);}

type Props = null;

class App extends React.Component<Props> {
    background = React.createRef<HTMLDivElement>();

    constructor(p: Props){
        super(p);
        window.addEventListener('keydown', this.handleKeyboard.bind(this));
    }

    render(): React.ReactNode{
        return (
        <div id="background" ref={this.background}>
            <div className="bg-1"></div>
        </div>
        );
    }    

    handleKeyboard(event: KeyboardEvent){
        const char = event.key;
        if (is字母(char)) {
            this.doEffect(char);
        } else {
            console.log(`You pressed a non-alphabetic key (${event.key})!`);
        }
    }

    doEffect(char: 字母){
        if (this.background.current){
            this.background.current.innerText = '我想你了';
        }
    }
};


export default App
