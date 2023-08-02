import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Place } from 'src/typeorm/entities/Place';
import { Repository } from 'typeorm';

@Injectable()
export class PlacesService {

    constructor(
        @InjectRepository(Place) private placeRepository: Repository<Place>,
        ){}


        async fetchMuseums(): Promise<Partial<Place>[]> {
            const api = 'https://www.odwb.be/api/records/1.0/search/?dataset=adresses-des-musees-reconnus-en-communaute-francaise&q=&facet=categorie&facet=bassin_de_vie_fwb&facet=categorie0'
    
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
          
                const data = await response.json();
    
                const filteredData = data.records.map((record: any) => ({
                    id: record.recordid,
                    name: record.fields.denomination,
                    localite: record.fields.localite,
                    categorie: record.fields.categorie,
                    telephone: record.fields.telephone,
                    adresse: record.fields.adresse,
                    geolocalisation: record.fields.geolocalisation
                  }));
    
                return filteredData;
            } catch (error) {
                throw new Error(`Failed to fetch data from API: ${error.message}`);
            }
        }

        async fetchMonuments(): Promise<Partial<Place>[]> {
            const api = 'https://www.odwb.be/api/records/1.0/search/?dataset=patrimoine-wallon-monuments&q=&facet=referentie&facet=province&facet=arrondissement&facet=canton&facet=commune'
    
            try {
                const response = await fetch(api);
                if (!response.ok) {
                    throw new Error(`Request failed with status ${response.status}`);
                }
          
                const data = await response.json();
    
                const filteredData = data.records.map((record: any) => ({
                    id: record.recordid,
                    name: record.fields.libelle,
                    localite: record.fields.commune,
                    categorie: record.fields.referentie,
                    telephone: record.fields.telephone,
                    geolocalisation: record.fields.geo_point_2d
                  }));
    
                return filteredData;
            } catch (error) {
                throw new Error(`Failed to fetch data from API: ${error.message}`);
            }
        }

        // async saveMuseums(museumsData: Partial<Place>[]): Promise<Place[]> {
        //     const placesToSave = museumsData.map((museumData) =>
        //       this.placeRepository.create(museumData),
        //     );
        //     return this.placeRepository.save(placesToSave);
        //   }


}
