import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LandingPageComponent } from './Homepage/Landing-Page/landing-page.component';
import { AuthComponent } from './Auth/auth.component';
import { HomepageComponent } from './Homepage/homepage.component';
import { HeaderComponent } from './Homepage/Header/header.component'
import { HeaderOpuComponent } from './Homepage/Header-OPU/header-opu.component';

import { SummaryAbfComponent } from './Homepage/OPU/abf/summary-abf/summary-abf.component';
import { AHIAbfComponent } from './Homepage/OPU/abf/ahi-abf/ahi-abf.component';
import { PerfectAbfComponent } from './Homepage/OPU/abf/perfect-abf/perfect-abf.component';
import { PathAbfComponent } from './Homepage/OPU/abf/path-abf/path-abf.component';

import { AbfComponent } from './Homepage/OPU/abf/abf.component';
import { MlngComponent } from './Homepage/OPU/mlng/mlng.component';
import { MtbeComponent } from './Homepage/OPU/mtbe/mtbe.component';
import { MrcsbComponent } from './Homepage/OPU/mrcsb/mrcsb.component';
import { PceComponent } from './Homepage/OPU/pce/pce.component';
import { PcfkComponent } from './Homepage/OPU/pcfk/pcfk.component';
import { PcpsbComponent } from './Homepage/OPU/pcpsb/pcpsb.component';
import { PgbComponent } from './Homepage/OPU/pgb/pgb.component';
import { PrpcufComponent } from './Homepage/OPU/prpcuf/prpcuf.component';
import { SogtComponent } from './Homepage/OPU/sogt/sogt.component';
import { GTSComponent } from './Homepage/OPU/gts/gts.component';
import { PcmlComponent } from './Homepage/OPU/pcml/pcml.component';
import { AngsiComponent } from './Homepage/OPU/angsi/angsi.component';
import { KumangComponent } from './Homepage/OPU/kumang/kumang.component';
import { BaroniaComponent } from './Homepage/OPU/baronia/baronia.component';
import { OpuComponent } from './Homepage/OPU/opu/opu.component';

import { SummaryAngsiComponent } from './Homepage/OPU/angsi/summary-angsi/summary-angsi.component';
import { AhiAngsiComponent } from './Homepage/OPU/angsi/ahi-angsi/ahi-angsi.component';
import { PathAngsiComponent } from './Homepage/OPU/angsi/path-angsi/path-angsi.component';
import { PerfectAngsiComponent } from './Homepage/OPU/angsi/perfect-angsi/perfect-angsi.component';
import { BaroniaAhiComponent } from './Homepage/OPU/baronia/baronia-ahi/baronia-ahi.component';
import { BaroniaPathComponent } from './Homepage/OPU/baronia/baronia-path/baronia-path.component';
import { BaroniaPerfectComponent } from './Homepage/OPU/baronia/baronia-perfect/baronia-perfect.component';
import { BaroniaSummaryComponent } from './Homepage/OPU/baronia/baronia-summary/baronia-summary.component';
import { GtsSummaryComponent } from './Homepage/OPU/gts/gts-summary/gts-summary.component';
import { KumangAhiComponent } from './Homepage/OPU/kumang/kumang-ahi/kumang-ahi.component';
import { KumangPathComponent } from './Homepage/OPU/kumang/kumang-path/kumang-path.component';
import { KumangPerfectComponent } from './Homepage/OPU/kumang/kumang-perfect/kumang-perfect.component';
import { KumangSummaryComponent } from './Homepage/OPU/kumang/kumang-summary/kumang-summary.component';
import { MlngAhiComponent } from './Homepage/OPU/mlng/mlng-ahi/mlng-ahi.component';
import { MlngPathComponent } from './Homepage/OPU/mlng/mlng-path/mlng-path.component';
import { MlngPerfectComponent } from './Homepage/OPU/mlng/mlng-perfect/mlng-perfect.component';
import { MlngSummaryComponent } from './Homepage/OPU/mlng/mlng-summary/mlng-summary.component';
import { MrcsbAhiComponent } from './Homepage/OPU/mrcsb/mrcsb-ahi/mrcsb-ahi.component';
import { MrcsbPathComponent } from './Homepage/OPU/mrcsb/mrcsb-path/mrcsb-path.component';
import { MrcsbPerfectComponent } from './Homepage/OPU/mrcsb/mrcsb-perfect/mrcsb-perfect.component';
import { MrcsbSummaryComponent } from './Homepage/OPU/mrcsb/mrcsb-summary/mrcsb-summary.component';
import { MtbeAhiComponent } from './Homepage/OPU/mtbe/mtbe-ahi/mtbe-ahi.component';
import { MtbePathComponent } from './Homepage/OPU/mtbe/mtbe-path/mtbe-path.component';
import { MtbePerfectComponent } from './Homepage/OPU/mtbe/mtbe-perfect/mtbe-perfect.component';
import { MtbeSummaryComponent } from './Homepage/OPU/mtbe/mtbe-summary/mtbe-summary.component';
import { PceAhiComponent } from './Homepage/OPU/pce/pce-ahi/pce-ahi.component';
import { PcePathComponent } from './Homepage/OPU/pce/pce-path/pce-path.component';
import { PcePerfectComponent } from './Homepage/OPU/pce/pce-perfect/pce-perfect.component';
import { PceSummaryComponent } from './Homepage/OPU/pce/pce-summary/pce-summary.component';
import { PcfkAhiComponent } from './Homepage/OPU/pcfk/pcfk-ahi/pcfk-ahi.component';
import { PcfkPathComponent } from './Homepage/OPU/pcfk/pcfk-path/pcfk-path.component';
import { PcfkPerfectComponent } from './Homepage/OPU/pcfk/pcfk-perfect/pcfk-perfect.component';
import { PcfkSummaryComponent } from './Homepage/OPU/pcfk/pcfk-summary/pcfk-summary.component';
import { PcmlAhiComponent } from './Homepage/OPU/pcml/pcml-ahi/pcml-ahi.component';
import { PcmlPathComponent } from './Homepage/OPU/pcml/pcml-path/pcml-path.component';
import { PcmlPerfectComponent } from './Homepage/OPU/pcml/pcml-perfect/pcml-perfect.component';
import { PcmlSummaryComponent } from './Homepage/OPU/pcml/pcml-summary/pcml-summary.component';
import { PcpsbAhiComponent } from './Homepage/OPU/pcpsb/pcpsb-ahi/pcpsb-ahi.component';
import { PcpsbPathComponent } from './Homepage/OPU/pcpsb/pcpsb-path/pcpsb-path.component';
import { PcpsbPerfectComponent } from './Homepage/OPU/pcpsb/pcpsb-perfect/pcpsb-perfect.component';
import { PcpsbSummaryComponent } from './Homepage/OPU/pcpsb/pcpsb-summary/pcpsb-summary.component';
import { PgbAhiComponent } from './Homepage/OPU/pgb/pgb-ahi/pgb-ahi.component';
import { PgbPathComponent } from './Homepage/OPU/pgb/pgb-path/pgb-path.component';
import { PgbPerfectComponent } from './Homepage/OPU/pgb/pgb-perfect/pgb-perfect.component';
import { PgbSummaryComponent } from './Homepage/OPU/pgb/pgb-summary/pgb-summary.component';
import { PrpcufAhiComponent } from './Homepage/OPU/prpcuf/prpcuf-ahi/prpcuf-ahi.component';
import { PrpcufPathComponent } from './Homepage/OPU/prpcuf/prpcuf-path/prpcuf-path.component';
import { PrpcufPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/prpcuf-perfect.component';
import { PrpcufSummaryComponent } from './Homepage/OPU/prpcuf/prpcuf-summary/prpcuf-summary.component';
import { SogtAhiComponent } from './Homepage/OPU/sogt/sogt-ahi/sogt-ahi.component';
import { SogtPathComponent } from './Homepage/OPU/sogt/sogt-path/sogt-path.component';
import { SogtPerfectComponent } from './Homepage/OPU/sogt/sogt-perfect/sogt-perfect.component';
import { SogtSummaryComponent } from './Homepage/OPU/sogt/sogt-summary/sogt-summary.component';
import { GtsAhiComponent } from './Homepage/OPU/gts/gts-ahi/gts-ahi.component';
import { GtsPathComponent } from './Homepage/OPU/gts/gts-path/gts-path.component';
import { GtsPerfectComponent } from './Homepage/OPU/gts/gts-perfect/gts-perfect.component';
import { PageNotFoundComponent } from './Homepage/page-not-found/page-not-found.component';
import { SummaryPrpcufComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/Summary/summary-prpcuf.component';
import { RISPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/RIS/ris-perfect.component';
import { SIPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/SI/si-perfect.component';
import { OLPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/OL/ol-perfect.component';
import { MHPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/MH/mh-perfect.component';
import { CLPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/CL/cl-perfect.component';
import { SummaryPerfectComponent } from './Homepage/OPU/pgb/pgb-perfect/Summary-perfect/summary-perfect.component';

@NgModule({
  declarations: [
    AppComponent,
    AbfComponent,
    MlngComponent,
    MtbeComponent,
    MrcsbComponent,
    PceComponent,
    PcfkComponent,
    PcpsbComponent,
    PgbComponent,
    PrpcufComponent,
    SogtComponent,
    GTSComponent,
    LandingPageComponent,
    AuthComponent,
    SummaryAbfComponent,
    AHIAbfComponent,
    PerfectAbfComponent,
    PathAbfComponent,
    HeaderComponent,
    HeaderOpuComponent,
    PcmlComponent,
    AngsiComponent,
    KumangComponent,
    BaroniaComponent,
    OpuComponent,
    HomepageComponent,
    AhiAngsiComponent,
    PathAngsiComponent,
    PerfectAngsiComponent,
    SummaryAngsiComponent,
    BaroniaAhiComponent,
    BaroniaPathComponent,
    BaroniaPerfectComponent,
    BaroniaSummaryComponent,
    GtsSummaryComponent,
    KumangAhiComponent,
    KumangPathComponent,
    KumangPerfectComponent,
    KumangSummaryComponent,
    MlngAhiComponent,
    MlngPathComponent,
    MlngPerfectComponent,
    MlngSummaryComponent,
    MrcsbAhiComponent,
    MrcsbPathComponent,
    MrcsbPerfectComponent,
    MrcsbSummaryComponent,
    MtbeAhiComponent,
    MtbePathComponent,
    MtbePerfectComponent,
    MtbeSummaryComponent,
    PceAhiComponent,
    PcePathComponent,
    PcePerfectComponent,
    PceSummaryComponent,
    PcfkAhiComponent,
    PcfkPathComponent,
    PcfkPerfectComponent,
    PcfkSummaryComponent,
    PcmlAhiComponent,
    PcmlPathComponent,
    PcmlPerfectComponent,
    PcmlSummaryComponent,
    PcpsbAhiComponent,
    PcpsbPathComponent,
    PcpsbPerfectComponent,
    PcpsbSummaryComponent,
    PgbAhiComponent,
    PgbPathComponent,
    PgbPerfectComponent,
    PgbSummaryComponent,
    PrpcufAhiComponent,
    PrpcufPathComponent,
    PrpcufPerfectComponent,
    PrpcufSummaryComponent,
    SogtAhiComponent,
    SogtPathComponent,
    SogtPerfectComponent,
    SogtSummaryComponent,
    GtsAhiComponent,
    GtsPathComponent,
    GtsPerfectComponent,
    PageNotFoundComponent,
    SummaryPrpcufComponent,
    RISPerfectComponent,
    SIPerfectComponent,
    OLPerfectComponent,
    MHPerfectComponent,
    CLPerfectComponent,
    SummaryPerfectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
