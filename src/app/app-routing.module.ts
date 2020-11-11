import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthComponent } from "./Auth/auth.component";
import { AbfComponent } from "./Homepage/OPU/abf/abf.component";
import { PathAbfComponent } from "./Homepage/OPU/abf/path-abf/path-abf.component";
import { PerfectAbfComponent } from "./Homepage/OPU/abf/perfect-abf/perfect-abf.component";
import { AHIAbfComponent } from "./Homepage/OPU/abf/ahi-abf/ahi-abf.component";
import { SummaryAbfComponent } from "./Homepage/OPU/abf/summary-abf/summary-abf.component";
import { AuthGuard } from "./auth.guard";
import { HomepageComponent } from "./Homepage/homepage.component";
import { MlngComponent } from "./Homepage/OPU/mlng/mlng.component";
import { AngsiComponent } from "./Homepage/OPU/angsi/angsi.component";
import { SummaryAngsiComponent } from "./Homepage/OPU/angsi/summary-angsi/summary-angsi.component";
import { AhiAngsiComponent } from "./Homepage/OPU/angsi/ahi-angsi/ahi-angsi.component";
import { PathAngsiComponent } from "./Homepage/OPU/angsi/path-angsi/path-angsi.component";
import { PerfectAngsiComponent } from "./Homepage/OPU/angsi/perfect-angsi/perfect-angsi.component";
import { BaroniaComponent } from "./Homepage/OPU/baronia/baronia.component";
import { BaroniaSummaryComponent } from "./Homepage/OPU/baronia/baronia-summary/baronia-summary.component";
import { BaroniaAhiComponent } from "./Homepage/OPU/baronia/baronia-ahi/baronia-ahi.component";
import { BaroniaPathComponent } from "./Homepage/OPU/baronia/baronia-path/baronia-path.component";
import { BaroniaPerfectComponent } from "./Homepage/OPU/baronia/baronia-perfect/baronia-perfect.component";
import { KumangComponent } from "./Homepage/OPU/kumang/kumang.component";
import { KumangSummaryComponent } from "./Homepage/OPU/kumang/kumang-summary/kumang-summary.component";
import { KumangAhiComponent } from "./Homepage/OPU/kumang/kumang-ahi/kumang-ahi.component";
import { KumangPerfectComponent } from "./Homepage/OPU/kumang/kumang-perfect/kumang-perfect.component";
import { KumangPathComponent } from "./Homepage/OPU/kumang/kumang-path/kumang-path.component";
import { MlngSummaryComponent } from "./Homepage/OPU/mlng/mlng-summary/mlng-summary.component";
import { MlngAhiComponent } from "./Homepage/OPU/mlng/mlng-ahi/mlng-ahi.component";
import { MlngPathComponent } from "./Homepage/OPU/mlng/mlng-path/mlng-path.component";
import { MlngPerfectComponent } from "./Homepage/OPU/mlng/mlng-perfect/mlng-perfect.component";
import { MrcsbComponent } from "./Homepage/OPU/mrcsb/mrcsb.component";
import { MrcsbSummaryComponent } from "./Homepage/OPU/mrcsb/mrcsb-summary/mrcsb-summary.component";
import { MrcsbPathComponent } from "./Homepage/OPU/mrcsb/mrcsb-path/mrcsb-path.component";
import { MrcsbAhiComponent } from "./Homepage/OPU/mrcsb/mrcsb-ahi/mrcsb-ahi.component";
import { MrcsbPerfectComponent } from "./Homepage/OPU/mrcsb/mrcsb-perfect/mrcsb-perfect.component";
import { MtbeComponent } from "./Homepage/OPU/mtbe/mtbe.component";
import { MtbeAhiComponent } from "./Homepage/OPU/mtbe/mtbe-ahi/mtbe-ahi.component";
import { MtbePathComponent } from "./Homepage/OPU/mtbe/mtbe-path/mtbe-path.component";
import { MtbePerfectComponent } from "./Homepage/OPU/mtbe/mtbe-perfect/mtbe-perfect.component";
import { PceComponent } from "./Homepage/OPU/pce/pce.component";
import { MtbeSummaryComponent } from "./Homepage/OPU/mtbe/mtbe-summary/mtbe-summary.component";
import { PceSummaryComponent } from "./Homepage/OPU/pce/pce-summary/pce-summary.component";
import { PceAhiComponent } from "./Homepage/OPU/pce/pce-ahi/pce-ahi.component";
import { PcePathComponent } from "./Homepage/OPU/pce/pce-path/pce-path.component";
import { PcePerfectComponent } from "./Homepage/OPU/pce/pce-perfect/pce-perfect.component";
import { PcfkComponent } from "./Homepage/OPU/pcfk/pcfk.component";
import { PcfkSummaryComponent } from "./Homepage/OPU/pcfk/pcfk-summary/pcfk-summary.component";
import { PcfkAhiComponent } from "./Homepage/OPU/pcfk/pcfk-ahi/pcfk-ahi.component";
import { PcfkPathComponent } from "./Homepage/OPU/pcfk/pcfk-path/pcfk-path.component";
import { PcfkPerfectComponent } from "./Homepage/OPU/pcfk/pcfk-perfect/pcfk-perfect.component";
import { PcmlComponent } from "./Homepage/OPU/pcml/pcml.component";
import { PcmlSummaryComponent } from "./Homepage/OPU/pcml/pcml-summary/pcml-summary.component";
import { PcmlAhiComponent } from "./Homepage/OPU/pcml/pcml-ahi/pcml-ahi.component";
import { PcmlPathComponent } from "./Homepage/OPU/pcml/pcml-path/pcml-path.component";
import { PcmlPerfectComponent } from "./Homepage/OPU/pcml/pcml-perfect/pcml-perfect.component";
import { PcpsbComponent } from "./Homepage/OPU/pcpsb/pcpsb.component";
import { PcpsbAhiComponent } from "./Homepage/OPU/pcpsb/pcpsb-ahi/pcpsb-ahi.component";
import { PcpsbSummaryComponent } from "./Homepage/OPU/pcpsb/pcpsb-summary/pcpsb-summary.component";
import { PcpsbPathComponent } from "./Homepage/OPU/pcpsb/pcpsb-path/pcpsb-path.component";
import { PcpsbPerfectComponent } from "./Homepage/OPU/pcpsb/pcpsb-perfect/pcpsb-perfect.component";
import { PgbComponent } from "./Homepage/OPU/pgb/pgb.component";
import { PgbSummaryComponent } from "./Homepage/OPU/pgb/pgb-summary/pgb-summary.component";
import { PgbAhiComponent } from "./Homepage/OPU/pgb/pgb-ahi/pgb-ahi.component";
import { PgbPathComponent } from "./Homepage/OPU/pgb/pgb-path/pgb-path.component";
import { PgbPerfectComponent } from "./Homepage/OPU/pgb/pgb-perfect/pgb-perfect.component";
import { PrpcufComponent } from "./Homepage/OPU/prpcuf/prpcuf.component";
import { PrpcufSummaryComponent } from "./Homepage/OPU/prpcuf/prpcuf-summary/prpcuf-summary.component";
import { PrpcufAhiComponent } from "./Homepage/OPU/prpcuf/prpcuf-ahi/prpcuf-ahi.component";
import { PrpcufPathComponent } from "./Homepage/OPU/prpcuf/prpcuf-path/prpcuf-path.component";
import { PrpcufPerfectComponent } from "./Homepage/OPU/prpcuf/prpcuf-perfect/prpcuf-perfect.component";
import { SogtComponent } from "./Homepage/OPU/sogt/sogt.component";
import { SogtSummaryComponent } from "./Homepage/OPU/sogt/sogt-summary/sogt-summary.component";
import { SogtAhiComponent } from "./Homepage/OPU/sogt/sogt-ahi/sogt-ahi.component";
import { SogtPathComponent } from "./Homepage/OPU/sogt/sogt-path/sogt-path.component";
import { SogtPerfectComponent } from "./Homepage/OPU/sogt/sogt-perfect/sogt-perfect.component";
import { GTSComponent } from "./Homepage/OPU/gts/gts.component";
import { GtsSummaryComponent } from "./Homepage/OPU/gts/gts-summary/gts-summary.component";
import { PageNotFoundComponent } from "./Homepage/page-not-found/page-not-found.component";
import { GtsAhiComponent } from "./Homepage/OPU/gts/gts-ahi/gts-ahi.component";
import { GtsPathComponent } from "./Homepage/OPU/gts/gts-path/gts-path.component";
import { GtsPerfectComponent } from "./Homepage/OPU/gts/gts-perfect/gts-perfect.component";
import { UserNotAuthorizedComponent } from "./Homepage/user-not-authorized/user-not-authorized.component";
import { SummaryPrpcufComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/Summary/summary-prpcuf.component';
import { RISPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/RIS/ris-perfect.component';
import { CLPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/CL/cl-perfect.component';
import { OLPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/OL/ol-perfect.component';
import { MHPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/MH/mh-perfect.component';
import { SIPerfectComponent } from './Homepage/OPU/prpcuf/prpcuf-perfect/SI/si-perfect.component';
import { SummaryPerfectComponent } from './Homepage/OPU/pgb/pgb-perfect/Summary-perfect/summary-perfect.component';
import { RISPerfectPgbComponent } from './Homepage/OPU/pgb/pgb-perfect/RIS-perfect-pgb/ris-perfect-pgb.component';
import { SIPerfectPgbComponent } from './Homepage/OPU/pgb/pgb-perfect/SI-perfect-pgb/si-perfect-pgb.component';
import { MHPerfectPgbComponent } from './Homepage/OPU/pgb/pgb-perfect/MH-perfect-pgb/mh-perfect-pgb.component';
import { OLPerfectPgbComponent } from './Homepage/OPU/pgb/pgb-perfect/OL-perfect-pgb/ol-perfect-pgb.component';
import { CLPerfectPgbComponent } from './Homepage/OPU/pgb/pgb-perfect/CL-perfect-pgb/cl-perfect-pgb.component';

const routes: Routes = [
  { path: "login", component: AuthComponent },
  { path: "not-found", component: PageNotFoundComponent },
  { path: "not-authorized", component: UserNotAuthorizedComponent },
  {
    path: "home",
    component: HomepageComponent,
    canActivate: [AuthGuard],
  },

  //ABF
  {
    path: "abf",
    redirectTo: "/abf/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "abf",
    component: AbfComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: SummaryAbfComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: PathAbfComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //ANGSI
  {
    path: "angsi",
    redirectTo: "/angsi/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "angsi",
    component: AngsiComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "summary", component: SummaryAngsiComponent, outlet: "tabname" },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "perfect", component: UserNotAuthorizedComponent, outlet: "tabname" },
    ],
  },

  //BARONIA
  {
    path: "baronia",
    redirectTo: "/baronia/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "baronia",
    component: BaroniaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: BaroniaSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: UserNotAuthorizedComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //KUMANG
  {
    path: "kumang",
    redirectTo: "/kumang/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "kumang",
    component: KumangComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: KumangSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: KumangAhiComponent, outlet: "tabname" },
      {
        path: "path",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //MLNG
  {
    path: "mlng",
    redirectTo: "/mlng/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "mlng",
    component: MlngComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: MlngSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: MlngAhiComponent, outlet: "tabname" },
      { path: "path", component: MlngPathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //MRCSB
  {
    path: "mrcsb",
    redirectTo: "/mrcsb/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "mrcsb",
    component: MrcsbComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: MrcsbSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: MrcsbPathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //MTBE
  {
    path: "mtbe",
    redirectTo: "/mtbe/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "mtbe",
    component: MtbeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: MtbeSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: MtbePathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //PCE
  {
    path: "pce",
    redirectTo: "/pce/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "pce",
    component: PceComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: PceSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: PcePathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //PCFK
  {
    path: "pcfk",
    redirectTo: "/pcfk/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "pcfk",
    component: PcfkComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: PcfkSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: PcfkPathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //PCML
  {
    path: "pcml",
    redirectTo: "/pcml/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "pcml",
    component: PcmlComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "summary", component: PcmlSummaryComponent, outlet: "tabname" },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "perfect", component: UserNotAuthorizedComponent, outlet: "tabname" },
    ],
  },

  //PCPSB
  {
    path: "pcpsb",
    redirectTo: "/pcpsb/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "pcpsb",
    component: PcpsbComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: PcpsbSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: PcpsbAhiComponent, outlet: "tabname" },
      { path: "path", component: PcpsbPathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",

      },
    ],
  },

  //PGB
  {
    path: "pgb",
    redirectTo: "/pgb/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "pgb",
    component: PgbComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: PgbSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: PgbPathComponent, outlet: "tabname" },
      { path: "perfect", component: PgbPerfectComponent, outlet: "tabname",
        children: [
          {
            path: "",
            redirectTo: "/pgb/(tabname:perfect/(navname:summary-pgb))",
            pathMatch: "full",
          },
          {
            path: "summary-pgb",
            component: SummaryPerfectComponent,
            outlet: "navname",
          },
          {
            path: "RIS-perfect-pgb",
            component: RISPerfectPgbComponent,
            outlet: "navname",
          },
          {
            path: "CL-perfect-pgb",
            component: CLPerfectPgbComponent,
            outlet: "navname",
          },
          {
            path: "OL-perfect-pgb",
            component: OLPerfectPgbComponent,
            outlet: "navname",
          },
          {
            path: "MH-perfect-pgb",
            component: MHPerfectPgbComponent,
            outlet: "navname",
          },
          {
            path: "SI-perfect-pgb",
            component: SIPerfectPgbComponent,
            outlet: "navname",
          }
        ],
      },
    ],
  },

  //PRPCUF
  {
    path: "prpcuf",
    redirectTo: "/prpcuf/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "prpcuf",
    component: PrpcufComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: "summary",
        component: PrpcufSummaryComponent,
        outlet: "tabname",
      },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "perfect", component: PrpcufPerfectComponent, outlet: "tabname",
        children: [
          {
            path: "",
            redirectTo: "/prpcuf/(tabname:perfect/(navname:summary-prpcuf))",
            pathMatch: "full",
          },
          {
            path: "summary-prpcuf",
            component: SummaryPrpcufComponent,
            outlet: "navname",
          },
          {
            path: "RIS-perfect",
            component: RISPerfectComponent,
            outlet: "navname",
          },
          {
            path: "CL-perfect",
            component: CLPerfectComponent,
            outlet: "navname",
          },
          {
            path: "OL-perfect",
            component: OLPerfectComponent,
            outlet: "navname",
          },
          {
            path: "MH-perfect",
            component: MHPerfectComponent,
            outlet: "navname",
          },
          {
            path: "SI-perfect",
            component: SIPerfectComponent,
            outlet: "navname",
          }
        ],
      },
    ],
  },

  //SOGT
  {
    path: "sogt",
    redirectTo: "/sogt/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "sogt",
    component: SogtComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "summary", component: SogtSummaryComponent, outlet: "tabname" },
      { path: "ahi", component: UserNotAuthorizedComponent, outlet: "tabname" },
      { path: "path", component: SogtPathComponent, outlet: "tabname" },
      {
        path: "perfect",
        component: UserNotAuthorizedComponent,
        outlet: "tabname",
      },
    ],
  },

  //GTS
  {
    path: "gts",
    redirectTo: "/gts/(tabname:summary)",
    canActivate: [AuthGuard],
    pathMatch: "full",
  },
  {
    path: "gts",
    component: GTSComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "summary", component: GtsSummaryComponent, outlet: "tabname" },
      { path: "ahi", component: GtsAhiComponent, outlet: "tabname" },
      { path: "path", component: GtsPathComponent, outlet: "tabname" },
      { path: "perfect", component: GtsPerfectComponent, outlet: "tabname" },
    ],
  },

  { path: "**", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
