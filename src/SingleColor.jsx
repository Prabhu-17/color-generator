import {toast} from 'react-toastify'

const SingleColor = ({color,index}) => {
    const {hex,weight}=color
    const saveToClipboard=async()=>{
        if (navigator.clipboard) {
          try {
            await navigator.clipboard.writeText(`#${hex}`)
            toast.success('Copied to clipboard')
          } catch (error) {
            toast.error('Failed to copy')
          }  
        }
        else{
            toast.error(error.message)
        }
    }
  return (
    <article className={index<12?'color':'color color-light'} style={{background:`#${hex}`}} onClick={saveToClipboard}>
        <p className="percent-value">{weight}%</p>
        <p className="color-value">#{hex}</p>

    </article>
  )
}
export default SingleColor