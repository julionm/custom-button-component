import './styles.scss';

type ButtonProps = {
    variant?: 'outline' | 'text',
    disableShadow?: boolean,
    disabled?: boolean,
    startIcon?: string,
    endIcon?: string,
    size?: "sm" | "md" | "lg",
    color?: "default" | "primary" | "secondary" | "danger",
    text?: string
}

export default function Button ({ variant, disableShadow, disabled, startIcon, endIcon, size, color, text }: ButtonProps) {

    /*

    TODO aumentar espaçamento do texto com os ícones

    */

    return (
        <button 
            className={ 
                `default ${variant} ` +
                `${disableShadow ? 'disableShadow' : ''} ` +
                `${disabled ? 'disable' : ''} ` +
                `${size ? `size-${size}` : ''} ` +
                `${color ? `${color}` : ''}`
            }
        >
            <div className="btnIconsContainer">
                {
                   startIcon ?
                   <span className="material-icons">{ startIcon }</span>
                   : ''
                }
                <span className="btnText">{ text ? text : 'Default' }</span>
                {
                    endIcon ? 
                    <span className="material-icons">{ endIcon }</span>
                    : ''
                }
            </div>
        </button>
    );
}