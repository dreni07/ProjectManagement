import { Handle, Position,Node } from 'reactflow';

interface CostumNodeProps {
    data:Node
}

const CustomNode = ({ data }:CostumNodeProps) => {
  return (
    <div style={{ padding:'8px 15px',borderRadius:'6px',color:"white",fontFamily:"Outfit",backgroundColor:"#333"}}>
      <Handle type="target" position={Position.Top} id="top" style={{ height:3,width:3,background: '#FFF',border:'none' }} />
        <div className="font-outfit text-sm font-light">
            {data.label}
        </div>
      <Handle type="source" position={Position.Bottom} id="bottom" style={{ height:3,width:3,background: '#FFF' }}  />

      <Handle type="target" position={Position.Bottom} id="bottom" style={{ height:3,width:3,background: '#FFF' }} />
      <Handle type="source" position={Position.Bottom} id="top" style={{ height:3,width:3,background: '#FFF' }}  />

      <Handle type="target" position={Position.Left} id="left" style={{ height:3,width:3,background: '#FFF' }} />
      <Handle type="source" position={Position.Right} id="right" style={{ height:3,width:3,background: '#FFF' }} />

      <Handle type="target" position={Position.Right} id="right" style={{ height:3,width:3,background: '#FFF' }} />
      <Handle type="source" position={Position.Left} id="left" style={{ height:3,width:3,background: '#FFF' }} />

    </div>
  );
};

export default CustomNode;

