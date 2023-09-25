import './App.css'
import {VirtualScroller} from "primereact/virtualscroller";
import {useState} from "react";
import {classNames} from "primereact/utils";
function App() {
    const [items] = useState(Array.from({ length: 100000 }).map((_, i) => `Item #${i}`));

    const itemTemplate = (item, options) => {
        const className = classNames('flex align-items-center p-2', {
            'surface-hover': options.odd
        });

        return (
            <div className={className} style={{ height: options.props.itemSize + 'px' }}>
                {item}
            </div>
        );
    };

    return (
        <div className="card flex justify-content-center">
            <VirtualScroller items={items} itemSize={50} itemTemplate={itemTemplate} className="border-1 surface-border border-round" style={{ width: '200px', height: '200px' }} />
        </div>
    );
}

export default App
