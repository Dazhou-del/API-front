import { EllipsisOutlined } from '@ant-design/icons';
import { PageContainer, ProCard } from '@ant-design/pro-components';
import { Button, Dropdown } from 'antd';
import sdkURL from '../../../public/dazhou-client-sdk.zip';




// function downloadFile(url: string | URL, fileName: string) {
//   var x = new XMLHttpRequest();
//   x.open("GET", url, true);
//   x.responseType = 'blob';
//   x.onload=function(e) {
//       var url = window.URL.createObjectURL(x.response)
//       var a = document.createElement('a');
//       a.href = url
//       a.download = fileName;
//       a.click()
//   }
//   x.send();
// }
     
export default () => (
  <div
    style={{
      background: '#F5F7FA',
    }}
  >
    <PageContainer
      header={{
        title: 'SDK接口文档',
        ghost: true,
     
        extra: [
          <a href={sdkURL} key="3" type="primary" download target="_blank">
            下载sdk
          </a>,
          // <a onClick={downloadFile("dazhou-client-sdk.zip","dazhou-client")}>
          //     下载sdk
        //   <a onClick={() => {
        //     downloadFile("dazhou-client-sdk.zip","dazhou-client")
        //  }}
        //    >
        // 下载sdk
        //   </a>
              
          // </a>,
          
        ],
      }}
      // tabBarExtraContent="测试tabBarExtraContent"
      tabList={[
        {
          tab: '详细信息',
          key: 'base',
          closable: false,
        },
      
      ]}
      tabProps={{
        type: 'editable-card',
        hideAdd: true,
        onEdit: (e, action) => console.log(e, action),
      }}
    >
      <h2>1.在pom文件中引入依赖</h2>
      <h3>仓库地址:<a>https://central.sonatype.com/artifact/io.gitee.continental-dada/dazhou-client-sdk/0.0.2</a></h3>
    <div style={{
      width: '100%',
      height: '150px',
      background :'black',
      opacity: 0.5,
      color: '#ff4b4b'
    }}>
      <h3>&lt;dependency&gt;</h3>
      <h3> &nbsp;&nbsp;&nbsp;&nbsp;&lt;groupId&gt;io.gitee.continental-dada&lt;/groupId&gt;</h3>
      <h3> &nbsp;&nbsp;&nbsp;&nbsp;&lt;artifactId&gt;dazhou-client-sdk&lt;/artifactId&gt;</h3>
      <h3> &nbsp;&nbsp;&nbsp;&nbsp;&lt;version&gt;0.0.2&lt;/version&gt;</h3>
      <h3>&lt;dependency&gt;</h3>
    </div>
    <h2>2.代码调用</h2>
    <h3>requestParams:请求参数</h3>
      <h3>url:请求的url地址</h3>
      <h3>method:请求的方法类型(Post)</h3>
    <div style={{
      width: '100%',
      height: '150px',
      background :'black',
      opacity: 0.5,
      color: '#ff4b4b'
    }}>
     
    <h3>RzApiClient rzApiClient = new RzApiClient()</h3>
    <h3>String requestParam="xxxx"</h3>
    <h3>String url="xxxx"</h3>
    <h3>String method="xxxx"</h3>
    <h3>String invokeResult = rzApiClient.executeApi(requestParams, url, method);</h3>
    </div>
    
    {/* https://central.sonatype.com/artifact/io.gitee.continental-dada/dazhou-client-sdk/0.0.2 */}
    </PageContainer>
  </div>
  
);


 