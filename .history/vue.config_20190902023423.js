export default{
    devServer: {
        peoxy: {
            '/api':{
                target: 'http://39.97.33.178',
                changeOrigin: true
            }
        }
    }
}