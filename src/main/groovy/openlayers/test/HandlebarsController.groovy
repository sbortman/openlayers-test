package openlayers.test

import groovy.json.JsonBuilder
import io.micronaut.http.annotation.Controller
import io.micronaut.http.annotation.Get
import io.micronaut.views.ModelAndView

import javax.inject.Inject

@Controller( "/handlebars" )
class HandlebarsController
{
	@Inject
	OpenLayersConfig openLayersConfig
	
	@Get( "/" )
	ModelAndView index()
	{
		return new ModelAndView( 'index', [
			openLayersConfig: new JsonBuilder( openLayersConfig )
		] )
	}
}