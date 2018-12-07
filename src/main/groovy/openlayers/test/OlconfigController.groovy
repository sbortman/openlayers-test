package openlayers.test

import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get

import javax.inject.Inject

@Controller( "/olconfig" )
class OlconfigController
{
	
	@Inject
	OpenLayersConfig openLayersConfig
	
	@Get( "/" )
	OpenLayersConfig index()
	{
		return openLayersConfig
	}
}