import {Injectable} from '@angular/core';

const cordova: any = (window as any)?.cordova;
const Fingerprint: any = (window as any)?.Fingerprint;
const SecureKeyStore: any = (window as any).cordova.plugins.SecureKeyStore;


@Injectable({providedIn: 'root'})
export class CordovaService {

  constructor() {
  }

  /**
   *   not mandatory but used to display info on start (for debug)
   */
  init(): void {
    document.addEventListener('deviceready', () => {
      // Cordova is now initialized
      console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);

      Fingerprint?.isAvailable(
        () => {
          console.log('Fingerprint available');
        },
        (error) => {
          console.log('Fingerprint unavailable', error);
        });

    }, false);
  }


  saveDataOnFingerAuth(value: any): any {
    Fingerprint.show({
        description: 'Some biometric auth'
      }, () => {
        // TODO create key according to authentification
        this.saveData(value, 'key');
      },
      (error) => {
        alert(`Can't authenticate with fingerprint: ${JSON.stringify(error)}`);
        console.error(error);
      });
  }

  saveData(value: any, key: string): any {
    SecureKeyStore.set(
      (res) => {
        alert(res); // res - string securely stored
      }, (error) => {
        alert(`Can't save in the keystore: ${JSON.stringify(error)}`);
        console.error(error);
      }, key, JSON.stringify(value));
  }

}


