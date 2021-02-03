import React from 'react';
import { DimmerInner, Dimmer, Loader} from 'semantic-ui-react';

const LoadingComponent: React.FC<{
    inverted?: boolean;
    content?: string
}> = ({
    inverted = true,
    content
}) => {

    return (
        <Dimmer active inverted={inverted} >
            <Loader content={content} ></Loader>
        </Dimmer>
    )

};

export default LoadingComponent;