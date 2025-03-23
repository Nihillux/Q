export default function TabButton({ children, onSelect }) {
console.log('TAPBUTTON COMPONENT RENDERED');
    
    return (
    <li>
        <button onClick={onSelect}>{children}</button>
    </li>
    );
}