import { Component, inject } from "@angular/core";
import { ActivatedRoute, RouterLink } from "@angular/router";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { services } from "../data/services";
@Component({
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./service-detail.component.html",
  styleUrl: "./service-detail.component.css",
})
export class ServiceDetailComponent {
  private route = inject(ActivatedRoute);
  private sanitizer = inject(DomSanitizer);
  item = services.find(
    (s) => s.slug === this.route.snapshot.paramMap.get("slug"),
  );
  // Video links must be approved embed URLs, never accept arbitrary user-provided URLs.
  video: SafeResourceUrl | null = this.item?.videoUrl
    ? this.sanitizer.bypassSecurityTrustResourceUrl(this.item.videoUrl)
    : null;
}
