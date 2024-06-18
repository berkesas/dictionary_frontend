export default function Footer() {
    return (
        <footer className="m-2">
            <div className='text-center'>
                {process.env.SITE_COPYRIGHT_TEXT}
            </div>
        </footer>
    )
}