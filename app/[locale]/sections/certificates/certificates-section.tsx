/* eslint-disable @next/next/no-img-element */
import { PropsWithChildren } from 'react';
import ContainerWrapper from '@/components/shared/cards-container-wrapper/container-wrapper';
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

type CredentialsButtonProps = PropsWithChildren<{
  credentialsUrl: Certificate['credentialsUrl'];
}>;
type ImageDialogProps = {
  imgUrl: string;
  id: string;
  title: string;
};

export default function CertificatesSection() {
  const certificates = fetchMostRecentCertificates();

  return (
    <ContainerWrapper>
      <Container className="flex flex-col gap-8 md:flex-row md:gap-3">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </Container>
    </ContainerWrapper>
  );
}

function CertificateCard({ certificate }: { certificate: Certificate }) {
  return (
    <Card className={`${classes['animate']} flex-1 pt-0`}>
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
