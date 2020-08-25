import React from 'react';

const codeFormat = (code) => {
    return code.split('\n').map((t, i) => {
        return (
            <div key={i}>
                {
                    t.split(' ').map((v, i) => v === '' ?
                        (<React.Fragment key={i}>&nbsp;</React.Fragment>) : (<React.Fragment key={i}>{v}&nbsp;</React.Fragment>)
                    )
                }
            </div>
        )
    })
}

export default codeFormat;