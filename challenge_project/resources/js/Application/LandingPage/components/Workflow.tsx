import React from 'react'
import ReactFlow, { Background,BackgroundVariant,Node,Edge,NodeTypes } from 'reactflow';
import CustomNode from './CostumNode';
import "reactflow/dist/style.css";

const Workflow = () => {

    const nodes:Node[] = [
        {
            id:"1",
            position:{x:50,y:50},
            data:{label:"Watch Demo"},
            type:"custom",
            style:{
                backgroundColor:"#333"
            }

        },

        {
            id:"2",
            position:{x:50,y:150},
            data:{label:"Create Account"},
            type:"custom",
            style:{
                backgroundColor:'#333'
            }
        },

        {
            id:"3",
            position:{x:50,y:250},
            data:{label:"Log In"},
            type:"custom",
            style:{
                backgroundColor:'#333'
            }
        },

        {
            id:"4",
            position:{x:350,y:150},
            data:{label:"Create Project"},
            type:"custom",
            style:{
                backgroundColor:'#333'
            }
        },

        {
            id:"5",
            position:{x:650,y:100},
            data:{label:"Invite Users"},
            type:"custom"
        },

        {
            id:"6",
            position:{x:650,y:200},
            data:{
                label:"Tell the AI About Project Details"
            },
            type:"custom"
        },

        {
            id:"7",
            position:{x:950,y:150},
            data:{label:"AI Works Now!"},
            type:"custom"
        },


    ]

    const edges:Edge[] = [
        { id: '1-2', source: '1', target: '2', animated: true,style: { stroke: '#7156b5', strokeWidth: 2 },},
        {id:'2-3',source:'2',target:'3',animated:true,style: { stroke: '#7156b5', strokeWidth: 2 }},
        {id:'3-4',source:'3',target:'4',sourceHandle:"bottom",targetHandle:"bottom",animated:true,style: { stroke: '#7156b5', strokeWidth: 2 }},
        {id:'4-5',source:'4',target:'5',sourceHandle:'right',targetHandle:'left',animated:true,style: { stroke: '#7156b5', strokeWidth: 2 }},
        {id:'5-6',source:'5',target:'6',sourceHandle:'bottom',targetHandle:'top',animated:true,style: { stroke: '#7156b5', strokeWidth: 2 }},
        {id:'6-7',source:'6',target:'7',sourceHandle:'right',targetHandle:'bottom',animated:true,style: { stroke: '#7156b5', strokeWidth: 2 }}
    ];

    const nodeTypes:NodeTypes = {
        custom:CustomNode
    }


  return (
    <div className="mt-5 h-[700px] w-full flex flex-col items-center">
        <div className="relative my-10 flex justify-center">
            <p className="absolute top-[-25%] text-[#7156b5] font-bold text-sm p-1"><span className="absolute top-0 left-0 h-[100%] w-[2px] rounded-sm bg-[#7156b5]"></span>WORKFLOW</p>
            <h1 className="text-5xl text-[#333] font-outfit text-center mt-5">How You Can Work<br></br>Easily</h1>
        </div>
        <div className="w-[80%] h-full my-10 bg-gray-50 rounded-md shadow-sm">
            <ReactFlow
                    nodes={nodes}
                    nodeTypes={nodeTypes}
                    edges={edges}
                    nodesDraggable={false}
                    nodesConnectable={false}
                    elementsSelectable={false}
                    panOnDrag={false}
            >
                <Background variant={BackgroundVariant.Dots} gap={30} color="#7156b5"/>

            </ReactFlow>
        </div>

    </div>
  )
}

export default Workflow
