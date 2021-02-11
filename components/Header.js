const Header = ({title}) => {
    return (
        <>
            <h1 style={styles}>{title}</h1>
        </>
    )
}

const styles = {
  margin: 0,
  fontSize: '4rem',
}

Header.defaultProps = {
    title: 'Header',
}

export default Header
