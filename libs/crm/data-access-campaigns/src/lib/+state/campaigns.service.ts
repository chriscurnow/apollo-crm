import { Injectable } from '@angular/core';
import { Campaign } from './campaigns.models';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { map } from 'rxjs';
const clientId = 'ba84770ab8bcd83e95994026e111d90b'; // this is the clientId for Chris Curnow Pty Ltd

export interface CreateSendResult{
  Results: Campaign[]
}


@Injectable({
  providedIn: 'root',
})
export class CampaignsService {
  constructor(private httpClient: HttpClient) {}

  getCampaignsList() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization:
          'Basic UW1ZZDJFL29HOHFTMUloN3FqN0tNc09mUmFOcnhNbDh6bm0zTmorUjNuc2s3cTU3WnJNMW9Oc3BublR4QklkVkJZQlUzemwxbFEzUDJNNzhCaEZweEpGdkM4NDVPM3dlWkV0aW9FUzBGVFlmU05wdXVNT0hndkV6WWU4RWU3eXc3am41L1I1WXplSFFlaDE3dDZaZkh3PT06QQ==',
      }),
    };
    return this.httpClient.get<CreateSendResult>(
      `api/clients/${clientId}/campaigns.json`,
      httpOptions
    ).pipe(
      map((res: CreateSendResult) => res.Results)
    )

  }

  // this.http.get
}
