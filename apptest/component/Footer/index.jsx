import Styles from "../../styles/styles";
import { useRouter } from 'next/router'
import Link from 'next/link'

export const Primary = (props) => {

    return (
        <div className={Styles.Footer.Primary}>
            <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Image taken from <a href="https://www.freeiconspng.com/img/23500">https://www.freeiconspng.com/img/23500</a></div>
        </div>
    )
}

export const Mobile = (props) => {
    return (
        <div className={Styles.Footer.Mobile}>
            <div className={Styles.Footer.ContainerMobile}>
                <Link href="/"><a className={Styles.Button.ButtonHeader}>Contact List</a></Link>
                <Link href="/contact/add"><a className={Styles.Button.ButtonHeader}>Add Contact</a></Link>
            </div>
        </div>
    )
}