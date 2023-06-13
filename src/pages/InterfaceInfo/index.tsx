import { getInterfaceInfoVOByIdUsingGET } from '@/services/nero-api-backend/interfaceInfoController';
import { useParams } from '@@/exports';
import { PageContainer } from '@ant-design/pro-components';
import { Badge, Card, Descriptions, message } from 'antd';
import React, { useEffect, useState } from 'react';

const Index: React.FC = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState<API.InterfaceInfoVO>();
    const params = useParams();

    const loadData = async () => {
        setLoading(true);
        try {
            await getInterfaceInfoVOByIdUsingGET({
                id: Number(params.id),
            }).then((res) => {
                setData(res.data);
            });
        } catch (error: any) {
            message.error('请求失败，' + error.message);
        }
        setLoading(false);
    };
    useEffect(() => {
        loadData();
    }, []);

    return (
        <PageContainer>
            <Card>
                {data ? (
                    <Descriptions title={data.name} column={1}>
                        <Descriptions.Item label="接口状态">
                            {data.status ? (
                                <Badge status="success" text={'开启'} />
                            ) : (
                                <Badge status="default" text={'关闭'} />
                            )}
                        </Descriptions.Item>
                        <Descriptions.Item label="描述">{data.description}</Descriptions.Item>
                        <Descriptions.Item label="请求地址">{data.url}</Descriptions.Item>
                        <Descriptions.Item label="请求方法">{data.method}</Descriptions.Item>
                        <Descriptions.Item label="请求头">{data.requestHeader}</Descriptions.Item>
                        <Descriptions.Item label="响应头">{data.responseHeader}</Descriptions.Item>
                        <Descriptions.Item label="创建时间">{data.createTime}</Descriptions.Item>
                        <Descriptions.Item label="更新时间">{data.updateTime}</Descriptions.Item>
                    </Descriptions>
                ) : (
                    <>接口不存在</>
                )}
            </Card>
        </PageContainer>
    );
};

export default Index;
