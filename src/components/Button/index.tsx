import './styles.scss';

type ButtonProps = {
    variant?: 'outline' | 'text',
    disableShadow?: boolean,
    disabled?: boolean,
    startIcon?: string,
    endIcon?: string,
    size?: "sm" | "md" | "lg",
    color?: "primary" | "secondary" | "danger"
}

export default function Button ({ variant, disableShadow, disabled, startIcon, endIcon }: ButtonProps) {

    return (
        <button 
            className={ 
                `default ${variant} ${disableShadow ? 'disableShadow' : ''} ` +
                `${disabled ? 'disable' : ''}`
            }
        >
            {
                startIcon ?
                (<span className="material-icons">face</span>)
                : ''
            }
            <span className="btnText">Default</span>
        </button>
    );
}