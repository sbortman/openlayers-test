package openlayers.test

import io.micronaut.context.annotation.ConfigurationProperties

@ConfigurationProperties( 'openlayers' )
class OpenLayersConfig
{
	List<BaseMap> baseMaps;
	
	static class BaseMap
	{
		String layerType
		String title
		String url
		Map<String,String> params
		Map<String,Object> options
	}
}
