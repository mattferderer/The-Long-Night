
import { CustomersService } from './customers.service';
export class CustomersComponent implements OnInit {
  customers: ICustomer[];

  constructor(private customersService: CustomersService) { }

  ngOnInit() {
    this.customers = this.customersService.getCustomers();
  }
}
