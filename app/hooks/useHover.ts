import React from "react";

export default function useHover(): [
    boolean,
    Pick<React.HTMLAttributes<HTMLElement>, "onMouseOver" | "onMouseOut">,
] {
    const [hovering, setHovering] = React.useState(false);

    const onMouseOver = () => setHovering(true);
    const onMouseOut = () => setHovering(false);

    return [
        hovering,
        {
            onMouseOut,
            onMouseOver,
        },
    ];
}
