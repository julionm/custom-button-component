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

export default function Button ({ variant, disableShadow, disabled }: ButtonProps) {

    return (
        <button 
            className={ 
                `default ${variant} ${disableShadow ? 'disableShadow' : ''} ` +
                `${disabled ? 'disable' : ''}`
            }
        >
            <span className="btnText">Default</span>
        </button>
    );
}