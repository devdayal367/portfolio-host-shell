import { Card } from "antd";

const CurrentFocus = (props: any) => {
    const { title, items } = props.content;
    return (
        <Card className="focus-card">
            <h3>{title}</h3>

            {items.map((item: string) => (
                <div key={item}>
                    • {item}
                </div>
            ))}
        </Card>
    );
};

export default CurrentFocus;