import  {myAlert} from  '~/myAlert'
// = ../../myAlert'
// dung ~/ la da co the quay tro lai di tu src vao ben trong
// dung cho thu muc gan src hon
// khong dung cho thu muc gan file dang import

function Button()
{
    return(
        <button
        onClick={myAlert}
        >Click Me</button>
    )
}

export default Button;