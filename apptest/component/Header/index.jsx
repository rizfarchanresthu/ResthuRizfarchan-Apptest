import Styles from "../../styles/styles";
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Desktop = (props) => {

    return (
        <div className={Styles.Header.Desktop}>
            <div>
                <Link href="/"><a className={Styles.Button.ButtonHeader}>Contact List</a></Link>
                <Link href="/contact/add"><a className={Styles.Button.ButtonHeader}>Add Contact</a></Link>
            </div>
        </div>
    )
}

export const Mobile = (props) => {
    const router = useRouter()
    return (
        <div className={Styles.Header.Mobile}>
            <div className={Styles.Header.ContainerMobile}>
                <img onClick={router.back} src={'/left-arrow.png'} style={{width: 50, filter: 'invert(100%)', '-webkit-filter': 'invert(100%)'}} alt='back' />
            </div>
        </div>
    )
}