import { Controller, Get } from '@nestjs/common';
import { PlacesService } from 'src/places/services/places/places.service';

@Controller('places')
export class PlacesController {

    constructor(private placesService: PlacesService){}

    @Get()
    async getPlaces(){
        const museumsData = await this.placesService.fetchMuseums();
        const monumentsData = await this.placesService.fetchMonuments();

        // Fusionner les tableaux de musées et de monuments
        const allPlacesData = museumsData.concat(monumentsData);

        return allPlacesData;
    }
}
