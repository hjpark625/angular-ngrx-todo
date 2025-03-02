import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core'
import { provideRouter } from '@angular/router'
import { provideStore } from '@ngrx/store'
import { provideStoreDevtools } from '@ngrx/store-devtools'

import { routes } from '@app/app.routes'
import { rootReducer } from '@/stores'

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ root: rootReducer }),
    provideStoreDevtools({ logOnly: !isDevMode() })
  ]
}
