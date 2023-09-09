

export default function ProjectVideo(props) {
    const video = props.video

    return (
        <video className='project-video' src={video} autoPlay={true} />
    )
}
