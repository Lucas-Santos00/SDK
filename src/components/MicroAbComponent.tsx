export default function MicroAbComponent( { classes, style }: { classes: string, style: number } ) {

    return (
        <>
            <a  href="#" 
                rel="noopener noreferrer" 
                className={classes}
                style={{ backgroundColor: style === 0 ? 'blue' : 'green' }}
            >
                Read our docs
            </a>
        </>
    )

}