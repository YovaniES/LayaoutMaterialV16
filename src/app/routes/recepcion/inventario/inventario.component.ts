import { Component, ElementRef, ViewChild } from '@angular/core';
import { BoxInventory } from './interfaces/inventario.interface';
import { InventarioService } from './services/inventario.service';
import { ToastrService } from 'ngx-toastr';
import { ResponseGetCaja } from './interfaces/response-get-caja-interface';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.scss'],
})
export class InventarioComponent {
  public dataSourceInventario: BoxInventory[] = [];
  displayedColumns = ['numCaja', 'idAnaquel', 'lado', 'idFila', 'idColumna', 'eliminar'];

  public disabledButton: boolean;

  @ViewChild('txtInput')
  tagInput!: ElementRef<HTMLInputElement>;

  constructor(
    private inventarioService: InventarioService,
    private toast: ToastrService
  ) {
    this.disabledButton = this.dataSourceInventario.length === 0;
  }

  private showMessageError(message: string) {
    this.toast.error(message);
  }

  private showMessageSuccess(message: string) {
    this.toast.success(message);
  }

  private validateDuplicateBoxInventory(numCaja: string) {
    let booleanDuplicate = false;
    for (const box of this.dataSourceInventario) {
      if (box.numCaja === numCaja) {
        booleanDuplicate = true;
      }
    }
    return booleanDuplicate;
  }

  obtainIdBox(numCaja: string) {
    let box: ResponseGetCaja;
    const agregarBoolean = true;

    if (numCaja) {
      if (this.validateDuplicateBoxInventory(numCaja) === false) {
        this.inventarioService.getInfoCaja(numCaja).subscribe(response => {
          box = response;
          let obj: BoxInventory = {
            idEmpaque: box.id,
            numCaja: box.numEmpaque,
            idAnaquel: box.coAnaquel,
            idColumna: box.coColumna,
            idFila: box.coFila,
            lado: box.coLado,
          };
          if (
            box.coAnaquel === undefined &&
            box.coColumna === undefined &&
            box.coFila === undefined &&
            box.coLado === undefined
          ) {
            obj = {
              idEmpaque: box.id,
              numCaja: box.numEmpaque,
              idAnaquel: '',
              idColumna: '',
              idFila: '',
              lado: '',
            };
          }
          this.dataSourceInventario = [...this.dataSourceInventario, obj];
          this.disabledButton = false;
        });
      }
    }
    this.tagInput.nativeElement.value = '';
  }

  deleteRowBox(rowBox: BoxInventory) {
    this.dataSourceInventario = this.dataSourceInventario.filter(box => box !== rowBox);
    this.updateDisabledButton();
  }

  private updateDisabledButton() {
    this.disabledButton = this.dataSourceInventario.length === 0;
  }

  finishProcess() {
    //this.reloadPageAfterDelay();
    for (const box of this.dataSourceInventario) {
      this.inventarioService.saveInventario(box).subscribe(response => {
        this.showMessageSuccess('SE GUARDO LA CAJA');
        this.dataSourceInventario = [...[]];
      });
    }
  }

  keyUpInput(inputText: any, idCaja: number, tipoInput: string) {
    let indexBox;
    switch (tipoInput) {
      case 'anaquel': {
        indexBox = this.searchBox(idCaja);
        this.dataSourceInventario[indexBox].idAnaquel = inputText.target.value;
        break;
      }
      case 'lado': {
        indexBox = this.searchBox(idCaja);
        this.dataSourceInventario[indexBox].lado = inputText.target.value;
        break;
      }
      case 'fila': {
        indexBox = this.searchBox(idCaja);
        this.dataSourceInventario[indexBox].idFila = inputText.target.value;
        break;
      }
      case 'columna': {
        indexBox = this.searchBox(idCaja);
        this.dataSourceInventario[indexBox].idColumna = inputText.target.value;
        break;
      }
      default: {
        break;
      }
    }
  }

  private searchBox(idEmpaque: number) {
    let index = 0;
    let i = 0;
    for (const box of this.dataSourceInventario) {
      if (box.idEmpaque === idEmpaque) {
        index = i;
      }
      i = i + 1;
    }
    return index;
  }
}
