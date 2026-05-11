/* eslint-disable @next/next/no-img-element */
'use client';
import { PropsWithChildren, useRef } from 'react';
import ContainerWrapper from '@/components/shared/container-wrapper/container-wrapper';
import Container from '@/components/shared/container';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import classes from './certificates-section.module.css';
import { Button } from '@/components/ui/button';
import { ExternalLinkIcon } from 'lucide-react';
import {
  Certificate,
  fetchMostRecentCertificates,
} from '@/services/certificates.services';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { CarouselButtons } from '@/components/shared/carousel-button';

type CredentialsButtonProps = PropsWithChildren<{
  credentialsUrl: Certificate['credentialsUrl'];
}>;
type ImageDialogProps = {
  imgUrl: string;
  id: string;
  title: string;
};

export function CertificatesSection() {
  const certificates = fetchMostRecentCertificates();
  const containerRef = useRef<HTMLDivElement | null>(null);
  return (
    <ContainerWrapper>
      <Container
        ref={containerRef}
        className="flex gap-8 md:gap-3 overflow-x-auto md:overflow-x-visible"
      >
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </Container>
      <CarouselButtons containerRef={containerRef} />
    </ContainerWrapper>
  );
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Card
      data-card
      className={`${classes['animate']} min-w-[85vw] md:min-w-auto md:flex-1 pt-0`}
    >
      <ImageDialog
        id={certificate.id}
        imgUrl={certificate.imgUrl}
        title={certificate.title}
      />
      <CardContent className="flex flex-col flex-1 gap-4">
        <CardTitle className="text-center m-auto">
          <h3 className="text-xl">{certificate.title}</h3>
        </CardTitle>
        <CredentialsButton credentialsUrl={certificate.credentialsUrl} />
      </CardContent>
    </Card>
  );
}

function ImageDialog({ imgUrl, id, title }: ImageDialogProps) {
  return (
    <Dialog>
      <DialogTrigger>
        <img
          src={imgUrl}
          alt={`Photo of certificate ${id}`}
          className="cursor-pointer transition hover:scale-[1.02]"
        />
      </DialogTrigger>
      <DialogContent className="min-w-[70vw] p-0">
        <DialogHeader className="sr-only">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>
        <img src={imgUrl} alt={`Photo of certificate ${id}`} />
      </DialogContent>
    </Dialog>
  );
}
function CredentialsButton({ credentialsUrl }: CredentialsButtonProps) {
  return (
    <div className="flex flex-wrap gap-1 justify-center mt-auto">
      <a href={credentialsUrl} target="_blank" rel="noopener noreferrer">
        <Button className="hover:scale-115">
          <ExternalLinkIcon />
          Credentials
        </Button>
      </a>
    </div>
  );
}
