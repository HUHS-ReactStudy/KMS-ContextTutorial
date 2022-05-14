//class형 컴포넌트에서도 useContext같은 Hook효과를 내기위해 static 정적메서드를 지정해 줘서 사용했다.


import ColorContext from '../contexts/color'
import { Component } from "react";

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']

class SelectColors extends Component {

    static contextType = ColorContext;

    handleSetColor = color=>{   
        this.context.actions.setColor(color)

    }
    handleSetSubcolor = subcolor=>{
        this.context.actions.setSubColor(subcolor)
    }

    render(){
        return(
            <div>
                <h2>색상을 선택하세요</h2>
                <div style={{display:'flex'}}>
                {colors.map(color=>(
                    <div key={color}
                    style={{background: color,
                    width: '24px',
                    height:'24px',
                    cursor:'pointer'
                }}
                onClick={()=>this.handleSetColor(color)}
                onContextMenu={e=>{
                    e.preventDefault();
                    this.handleSetSubcolor(color);
                }}/>
                ))}
                </div>
                <hr />
            </div>
        )
    }
}


export default SelectColors;
