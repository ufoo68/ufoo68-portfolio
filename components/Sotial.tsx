import { Timeline } from 'react-twitter-widgets'

const Sotial = () => {
  return (
    <div>
      <Timeline
        dataSource={{
          sourceType: 'profile',
          screenName: 'ufoo_yuta',
        }}
        options={{
          width: '400',
          height: '550',
        }}
      />
    </div>
  )
}

export default Sotial